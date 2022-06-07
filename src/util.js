const generateString = (len = 1) => {
  let text = '';
  let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  for (let i = 0; i < len; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
};

const randomNum = () => Math.random().toString().substr(2, 4);

export const generateID = (list) => {
  const listSet = new Set(list);

  const _generateID = (set) => {
    const randomString = generateString(2);
    const finalString = randomString + randomNum();

    if (set.has(finalString)) {
      return _generateID(list);
    }

    return finalString;
  };

  return _generateID(listSet);
};

// Some date formatter util functions

/**
 @func formatDateToString
 @param date  `Date | string`

 @description Accepts a date string and returns the formatted date in `dd-mmm-yyyy` format 
 */
export const formatDateToString = (date) => {
  const [, mm, dd, yy] = new Date(date).toDateString().split(' ');
  return [dd, mm, yy].join(' ');
};

/**
 @func formatDate
 @param date  Date
 @param pattern  string
 @param seperator  string | null | undefined

 @description Accepts some common formats as pattern and returns the formatted date string with the provided value as seperator.
 defaults to `dd-mm-yy` with `-` as seperator 
 */
export const formatDate = (date, pattern, seperator = '-') => {
  date = new Date(date);
  const [dd, mm, yy] = [
    date.getDate(),
    date.getMonth() + 1,
    date.getFullYear(),
  ];
  switch (pattern) {
    case 'dd-mm-yy':
      return [dd, mm, yy].join(seperator);
    case 'mm-dd-yy':
      return [mm, dd, yy].join(seperator);
    case 'yy-mm-dd':
      return [yy, mm, dd].join(seperator);
    case 'yy-dd-mm':
      return [yy, mm, dd].join(seperator);
    default:
      return [dd, mm, yy].join(seperator);
  }
};

/**
 @func addToDate
 @param date  Date | string
 @param days  number

 @description Adds specified number of days to the date string and returns it.
 */
export const addToDate = (date, days) => {
  date = new Date(date);
  date.setDate(date.getDate() + days);
  return date;
};

/**
 @func substractFromDate
 @param date  Date | string
 @param days  number

 @description Substracts specified number of days from the date string and returns it.
 */
export const substractFromDate = (date, days) => {
  date = new Date(date);
  date.setDate(date.getDate() - days);
  return date;
};

/**
 @func joinKeys
 @param obj Object
 @param seperator String

 @description Joins the object keys and returns a string with a separator provided. Separator Defaults to `\n`
 */
export const joinKeys = (obj, seperator = '\n') => Object.values(obj).join(seperator)
