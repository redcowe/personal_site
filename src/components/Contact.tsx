function Contact() {
    return (
    <div>
        <form action="POST">
            <input type="text" name="fname" id="fname" />
            <input type="text" name="lname" id="lname"/>
            <input type="email" name="email" id="email" />
            <input type="text" name="message" id="message" />
        </form>
    </div>
    );
}

export default Contact;
