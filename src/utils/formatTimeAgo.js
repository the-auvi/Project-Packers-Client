/**
 * @param {*} date 
 * @returns how many minutes ago from current time
 */
export default function formatTimeAgo(date) {
    // Calculate the difference in milliseconds between the current date and the provided date
    const timeDifference = Date.now() - date.getTime();
    // Calculate the difference in minutes
    const minutes = Math.floor(timeDifference / (1000 * 60));
    // Return the formatted string
    return minutes;
}