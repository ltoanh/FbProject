import CancelIcon from "@mui/icons-material/Cancel";
import ImageIcon from "@mui/icons-material/Image";
import {
  Avatar,
  Box,
  Button,
  CircularProgress,
  IconButton,
  Modal,
  TextareaAutosize,
  Typography
} from "@mui/material";
import { db, storage } from "config/firebaseConfig";
import firebase from "firebase";
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { selectorUser } from "slice/userSlice";
import "./status-modal.css";

const StatusModal = ({ open, handleClose }) => {
  const user = useSelector(selectorUser);

  // =============== state ==========================
  // disable upload post button
  const [disableButton, setDisableButton] = useState(true);

  // status content
  const [statusValue, setStatusValue] = useState("");
  // image
  const [selectedImage, setSelectedImage] = useState();
  const [imageSrcValue, setImageSrcValue] = useState("");
  const inputImageRef = useRef();

  // result status upload post
  const [isUploading, setIsUploading] = useState(false);
  const [progressUploading, setProgressUploading] = useState(0);

  const resetStatusModal = () => {
    setStatusValue("");

    setSelectedImage();
    setImageSrcValue("");

    setDisableButton(true);
    setIsUploading(false);
    setProgressUploading(0);

    handleClose();
  };

  // catch content user type status to enable button upload
  const handleChangeStatusValue = (e) => {
    let value = e.target.value;
    setStatusValue(value);

    if (value !== "") {
      setDisableButton(false);
    } else {
      setDisableButton(true);
    }
  };

  // check enable button
  useEffect(() => {
    if (statusValue || imageSrcValue) {
      setDisableButton(false);
    } else {
      setDisableButton(true);
    }
  }, [statusValue, imageSrcValue]);

  // preview image
  const handleClickUploadImage = () => {
    inputImageRef.current.click();
  };
  const handleChangeImageUpload = () => {
    let selectingFile = inputImageRef.current.files[0];
    if (selectingFile) {
      setSelectedImage(inputImageRef.current.files[0]);
    }
  };
  // remove image upload
  const handleRemoveImageUpload = () => {
    setSelectedImage();
    setImageSrcValue("");
  };
  // delete pre image upload
  useEffect(() => {
    if (selectedImage) {
      let objectURI = URL.createObjectURL(selectedImage);
      setImageSrcValue(objectURI);

      return () => {
        URL.revokeObjectURL(objectURI);
      };
    }
  }, [selectedImage]);

  // upload status post
  const handleClickPostStatus = () => {
    // upload image to storage
    const uploadTask = storage
      .ref(`images/${selectedImage.name}`)
      .put(selectedImage);

    // upload status
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        console.log("Upload is " + progress + "% done");
        setProgressUploading(progress);
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
        }
        setIsUploading(true);
        setDisableButton(true);
      },
      (error) => {
        // Handle unsuccessful uploads
        console.log(error);
      },
      () => {
        // complete upload
        storage
          .ref("images")
          .child(selectedImage.name)
          .getDownloadURL()
          .then((url) => {
            // store post status
            handleStoreStatusToDb(url);

            setDisableButton(true);
          })
          .catch(() => {
            setDisableButton(false);
          });
      }
    );
  };
  // post status
  const handleStoreStatusToDb = (imageSrc) => {
    db.collection("posts").add({
      content: statusValue,
      imageSrc: imageSrc,
      profileSrc: user.profileSrc,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      username: user.name,
    });

    resetStatusModal();
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className="modal-box">
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Tạo bài viết
          </Typography>
          <div className="status">
            <Avatar src={user.profileSrc} />
            <TextareaAutosize
              minRows={3}
              placeholder="Bạn đang nghĩ gì thế?"
              maxRows={10}
              style={{
                width: "100%",
                border: "1px solid #ebebeb",
                padding: ".5rem",
              }}
              value={statusValue}
              onChange={handleChangeStatusValue}
            />
          </div>
          {/* preview image */}
          {selectedImage && (
            <div className="image__preview">
              <IconButton onClick={handleRemoveImageUpload}>
                <CancelIcon />
              </IconButton>
              <img src={imageSrcValue} alt="preview" />
            </div>
          )}
          <div className="status__features">
            <h5>Thêm vào bài viết</h5>
            <div className="status__option">
              <IconButton
                aria-label="add-image"
                onClick={handleClickUploadImage}
              >
                <ImageIcon />
              </IconButton>
              <input
                ref={inputImageRef}
                accept="image/*"
                type="file"
                name="upload-image"
                id="upload-iamge"
                style={{ display: "none" }}
                onChange={handleChangeImageUpload}
              />
            </div>
          </div>
          <Button
            onClick={handleClickPostStatus}
            variant="contained"
            disabled={disableButton}
            style={{ width: "100%" }}
          >
            {isUploading ? (
              <CircularProgress variant="determinate" value={progressUploading} />
            ) : (
              <span>Đăng bài</span>
            )}
          </Button>
        </Box>
      </div>
    </Modal>
  );
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "10px",
};

export default StatusModal;