export const formatDate = (dateStr) => {
    const inputDate = new Date(dateStr);
    const today = new Date();
    const yesterday = new Date();
    yesterday.setDate(today.getDate() - 1);

    const isSameDay = (d1, d2) =>
        d1.getFullYear() === d2.getFullYear() &&
        d1.getMonth() === d2.getMonth() &&
        d1.getDate() === d2.getDate();

    if (isSameDay(inputDate, today)) {
        return "Today";
    }

    if (isSameDay(inputDate, yesterday)) {
        return "Yesterday";
    }

    // Format as dd MMM yyyy
    return inputDate.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
    });
};
