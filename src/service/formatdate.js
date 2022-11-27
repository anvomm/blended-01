import { format, formatDistanceToNow } from 'date-fns';

export const formatdate = data => {
  return format(new Date(data), 'Pp');
};

export const formatArticleDate = date => {
  return formatDistanceToNow(new Date(date), { addSuffix: true });
};
