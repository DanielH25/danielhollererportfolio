
export default function ContactForm() {

    return (
        <>
            
            <h2>Contact Form</h2>
            <div>
                <form action="https://formsubmit.co/danielhollerer25@gmail.com" method="POST" id="contact-form">

                    <label htmlFor="email">
                        Email:
                        <input type="email" id="email" name="email" required />
                    </label>
                    <label htmlFor="subject">
                        Subject:
                        <input type="text" id="subject" name="subject" required />
                    </label>

                    <label htmlFor="message">
                        Message:
                        <textarea id="message" name="message" rows="5" cols="50" required></textarea>
                    </label>
                    <button type="submit">Submit</button>

                </form>
            </div>


        </>
    );

}