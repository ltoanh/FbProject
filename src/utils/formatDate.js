import { format } from "date-fns";
import { formatRelative } from "date-fns/esm";

export const formatDate = (seconds) => format(new Date(seconds * 1000), "dd/MM/yyyy");

export const formatRelativeDate = (seconds) => formatRelative(new Date(seconds * 1000), new Date());