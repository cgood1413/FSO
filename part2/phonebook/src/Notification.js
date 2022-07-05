const Notification = ({message}) => {
    const notificationStyle = {
        width: '50%',
        height: 25,
        fontSize: 16,
        backgroundColor: 'green'
    }
    if (message === null){
        return null;
    }
    return (
        <div style={notificationStyle}>
            {message}
        </div>
    );
}

export default Notification