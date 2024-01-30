import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  

    const body = await req.json()

    const filename = body["path"]
    // const path = body["preview"]
    console.log(body)
    // console.log(filename)
    // console.log(path)
  


    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'gokulnathanand23@gmail.com', // Replace with your email
          pass: 'gjua bvru avha uelj' // Replace with your email password
        }
      });

      const mailOptions: nodemailer.SendMailOptions = {
        from: 'gokulnathanand23@gmail.com', // Sender email
        to: 'gokulnathanand23@gmail.com', // Receiver email
        subject: 'nodemailer testing', // Subject of the email
        attachments: [
          {
            filename: filename, // Dynamic filename
            path: './public/file_example_MP3_700KB.mp3' // Dynamic path
          }
        ]
        // Add text or HTML part of the email if needed
      };
    
      try {
        const info = await transporter.sendMail(mailOptions);
        console.log("Email sent to:", mailOptions.to);
        return new Response('ok')
      } catch (error) {
        console.error("Error Occurred", error);
        return new Response(JSON.stringify({ message: 'Error sending email', error }), {
            status: 500
        })
      }
}