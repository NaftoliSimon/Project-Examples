export default function editDate(dateTime) {
    if (dateTime) {
        let date = new Date(dateTime);
        const time = date.toLocaleTimeString()

        const dateTimeArr = dateTime.split('T');
        date = dateTimeArr[0];

        return `${date} ${time}`;
    } else {
        console.log('No Date Time');
    }
}
