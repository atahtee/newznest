type SelectField = {
  by: string;
  id: number;
  url: string;
  title: string;
  time: number;
};
export const selectFields = ({ id, by, url, time, title }: SelectField) => ({
  id,
  by,
  url,
  time,
  title,
});
