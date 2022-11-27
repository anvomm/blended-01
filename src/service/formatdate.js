import { format } from 'date-fns';

export const formatdate = data => {
  return format(new Date(data), 'Pp');
};
