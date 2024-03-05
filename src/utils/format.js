export const convertToDecimal = (num) => {
    if (num >= 1000000) {
        // Convert to millions
        return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
        // Convert to thousands
        return (num / 1000).toFixed(1) + 'K';
    } else {
        // Return the number as is
        return num.toString();
    }
};

export const getTimeAgo = (created_utc) => {
    const timestamp = created_utc * 1000; // convert to milliseconds
    const currentDate = new Date();
    const postDate = new Date(timestamp);

    // Calculate the time difference in milliseconds
    const timeDifference = currentDate - postDate;
    const secondsDifference = Math.floor(timeDifference / 1000);

    if (secondsDifference < 60) {
        // Less than 60 seconds ago
        return "just now";
    } else if (secondsDifference < 3600) {
        // Less than 1 hour ago
        const minutesDifference = Math.floor(secondsDifference / 60);
        return minutesDifference + " minutes ago";
    } else if (secondsDifference < 86400) {
        // Less than 1 day ago
        const hoursDifference = Math.floor(secondsDifference / 3600);
        return hoursDifference + " hours ago";
    } else if (secondsDifference < 31536000) {
        // Less than 1 year ago
        const daysDifference = Math.floor(secondsDifference / 86400);
        return daysDifference + " days ago";
    } else {
        // More than 1 year ago
        const yearsDifference = Math.floor(secondsDifference / 31536000);
        return yearsDifference + " years ago";
    }
};