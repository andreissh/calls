const date = new Date();
const threeDays = new Date(date.getFullYear(), date.getMonth(), date.getDate() - 3);
const week = new Date(date.getFullYear(), date.getMonth(), date.getDate() - 7);
const month = new Date(date.getFullYear(), date.getMonth() - 1, date.getDate());
const year = new Date(date.getFullYear() - 1, date.getMonth(), date.getDate());

const getData = (interval: Date) => {
    return `${interval.getFullYear()}-${interval.getMonth() < 10 ? "0" + interval.getMonth() : interval.getMonth()}-${
        interval.getDate() < 10 ? "0" + interval.getDate() : interval.getDate()
    }`;
};

const today = getData(date);
const threeDaysStr = getData(threeDays);
const weekStr = getData(week);
const monthStr = getData(month);
const yearStr = getData(year);

export const dates = [today, threeDaysStr, weekStr, monthStr, yearStr];
