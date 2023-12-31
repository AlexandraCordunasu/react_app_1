import "../../chats.css";


const UserChatComponent = () =>{
    return (
        <>
        <input type="checkbox" id="check" />
        <label className="chat-btn" htmlFor="check">
            <i className="bi bi-chat-dots comment"></i>
            <span class="position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-danger p-2"></span>
            <i className="bi bi-x-circle close"></i>
        </label>
        <div className="chat-wrapper">
            <div className="chat-header">
                <h6> Let's Chat - Online</h6>
            </div>
            <div className="chat-form">
                <div className="chat-msg">
                    <p>
                        <b>You wrote: </b> Hello,world!
                    </p>
                    <p className="bg-primary p-3 ms-4 text-light rounded=pill">
                        <b>Support</b>
                    </p>
                </div>
                <textarea
                    id="clientChatMsg"
                    className="form-control"
                    placeholde="Your Text Message"
                >
                </textarea>
                <button className="btn btn-success btn-block">Submit</button>
            </div>
        </div>
        </>
    )
}

export default UserChatComponent
