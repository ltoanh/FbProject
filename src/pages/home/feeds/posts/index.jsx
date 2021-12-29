import Post from "./Post";

import React from "react";
import './posts.css';

function Posts() {
  return (
    <div className="posts">
      <Post
        profileSrc="https://images.pexels.com/photos/8984273/pexels-photo-8984273.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        username="Mỗi ngày một trang sách"
        timestamp="16:00 27/12/2021"
        content={`"Nếu bạn phải chọn giữa việc làm đúng và việc làm tử tế, hãy chọn làm việc tử tế và bạn sẽ luôn đúng."

        #moingay1trangsach`}
        imageSrc="https://scontent.fhph2-1.fna.fbcdn.net/v/t39.30808-6/270038223_2842922749333914_1866602954615782287_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=9GKcNU-i8QYAX9lY89C&tn=r9IfNRUXcywK1UQQ&_nc_ht=scontent.fhph2-1.fna&oh=00_AT_BWjGoiBKqh65BnXuHTFzhYHU_eeE4gG6vOuvo8LzjmQ&oe=61D0FFAD"
      />
      <Post
        profileSrc="https://images.pexels.com/photos/9920227/pexels-photo-9920227.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        username="Vitaliy Motrofanenko"
        timestamp="17:00 27/12/2021"
        content={`THÓI QUEN ĐỌC SẼ THAY ĐỔI TÍNH CÁCH CỦA CHÚNG TA NHƯ THẾ NÀO?
        Đọc như một liệu pháp trị liệu!
        PHẦN LỚN các bài viết sẽ ảnh hưởng đến cách bạn nghĩ hay cảm nhận theo cách tác giả muốn. Bài viết bạn đang đọc cũng không ngoại lệ. Chúng tôi muốn bạn nghĩ về những thứ nhất định theo một cách xác định.
        Nhưng còn có một loại ảnh hưởng khác, không phổ biến trong việc viết, mà với một lĩnh vực khác hẳn. Trong lĩnh vực đó, bạn không cố gắng khiến người ta nghĩ hoặc cảm nhận theo một cách nào đó. Thay vào đó, bạn cố gắng để họ được là họ.
        Ví dụ, với tư cách là phụ huynh, chúng ta cổ vũ con trẻ khám phá chúng sẽ cần làm gì, trong nghề nghiệp hoặc trong một mối quan hệ. Mặc dù chúng ta có thể hi vọng rằng đối tượng hôn nhân có thể thế này thế kia, chúng ta cũng biết tình yêu cao thượng nhất là để một người được sống đúng với con người thật của mình. 
        ▪ Liệu một nhà văn có tạo ra ảnh hưởng gián tiếp kiểu như vậy, khiến độc giả nghĩ về họ? Chúng ta tin rằng câu trả lời là Có.`}
      />
    </div>
  );
}

export default Posts;
