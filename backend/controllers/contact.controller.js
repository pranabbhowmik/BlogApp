import Contact from "../model/contact.model.js";
import nodemailer from "nodemailer";

// Configure nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "cse.tukai@gmail.com",
    pass: "ffll jknl wpuy vdwn",
  },
});

const Contactmessage = async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ message: "Please fill in all fields" });
    }

    const newContact = new Contact({
      name,
      email,
      phone,
      subject,
      message,
    });
    await newContact.save();

    // Email to admin
    const adminMailOptions = {
      from: email,
      to: "pranabbhowmik@valourithm.com", // Admin email
      subject: `New Contact Message: ${subject}`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Subject: ${subject}  
        Message: ${message}
      `,
    };

    // Email to user (automatic response)
    const userMailOptions = {
      from: "cse.tukai@gmail.com",
      to: email, // User's email
      subject: "Thank you for contacting us!",
      html: `<!DOCTYPE html>
<html xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">

<head>
	<title></title>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0"><!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]--><!--[if !mso]><!-->
	<link href="https://fonts.googleapis.com/css2?family=Permanent+Marker:wght@100;200;300;400;500;600;700;800;900" rel="stylesheet" type="text/css"><!--<![endif]-->
	<style>
		* {
			box-sizing: border-box;
		}

		body {
			margin: 0;
			padding: 0;
		}

		a[x-apple-data-detectors] {
			color: inherit !important;
			text-decoration: inherit !important;
		}

		#MessageViewBody a {
			color: inherit;
			text-decoration: none;
		}

		p {
			line-height: inherit
		}

		.desktop_hide,
		.desktop_hide table {
			mso-hide: all;
			display: none;
			max-height: 0px;
			overflow: hidden;
		}

		.image_block img+div {
			display: none;
		}

		sup,
		sub {
			font-size: 75%;
			line-height: 0;
		}

		#converted-body .list_block ul,
		#converted-body .list_block ol,
		.body [class~="x_list_block"] ul,
		.body [class~="x_list_block"] ol,
		u+.body .list_block ul,
		u+.body .list_block ol {
			padding-left: 20px;
		}

		@media (max-width:620px) {
			.desktop_hide table.icons-inner {
				display: inline-block !important;
			}

			.icons-inner {
				text-align: center;
			}

			.icons-inner td {
				margin: 0 auto;
			}

			.mobile_hide {
				display: none;
			}

			.video_block .sizer {
				max-width: none !important;
			}

			.row-content {
				width: 100% !important;
			}

			.stack .column {
				width: 100%;
				display: block;
			}

			.mobile_hide {
				min-height: 0;
				max-height: 0;
				max-width: 0;
				overflow: hidden;
				font-size: 0px;
			}

			.desktop_hide,
			.desktop_hide table {
				display: table !important;
				max-height: none !important;
			}
		}
	</style><!--[if mso ]><style>sup, sub { font-size: 100% !important; } sup { mso-text-raise:10% } sub { mso-text-raise:-10% }</style> <![endif]-->
</head>

<body class="body" style="background-color: #ffffff; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
	<table class="nl-container" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff;">
		<tbody>
			<tr>
				<td>
					<table class="row row-1" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
						<tbody>
							<tr>
								<td>
									<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 600px; margin: 0 auto;" width="600">
										<tbody>
											<tr>
												<td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top;">
													<table class="icons_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; text-align: center; line-height: 0;">
														<tr>
															<td class="pad" style="vertical-align: middle; color: #1e0e4b; font-family: 'Permanent Marker', Impact, Charcoal, sans-serif; font-size: 20px; padding-bottom: 5px; padding-top: 5px; text-align: center;"><!--[if vml]><table align="center" cellpadding="0" cellspacing="0" role="presentation" style="display:inline-block;padding-left:0px;padding-right:0px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;"><![endif]-->
																<!--[if !vml]><!-->
																<table class="icons-inner" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block; padding-left: 0px; padding-right: 0px;" cellpadding="0" cellspacing="0" role="presentation"><!--<![endif]-->
																	<tr>
																		<td style="vertical-align: middle; text-align: center; padding-top: 5px; padding-bottom: 5px; padding-left: 5px; padding-right: 6px;"><a href="http://designedwithbeefree.com/" target="_blank" style="text-decoration: none;"><img class="icon" alt="Just Cheers" src="https://1f773cf0dc.imgdist.com/pub/bfra/odzf5l2d/8n3/he2/6cv/logo.png" height="auto" width="71" align="center" style="display: block; height: auto; margin: 0 auto; border: 0;"></a></td>
																		<td style="font-family: 'Permanent Marker', Impact, Charcoal, sans-serif; font-size: 20px; font-weight: undefined; color: #1e0e4b; vertical-align: middle; letter-spacing: undefined; text-align: center; line-height: normal;"><a href="http://designedwithbeefree.com/" target="_blank" style="color: #1e0e4b; text-decoration: none;">Welcome To Just Cheers</a></td>
																	</tr>
																</table>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table class="row row-2" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
						<tbody>
							<tr>
								<td>
									<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 600px; margin: 0 auto;" width="600">
										<tbody>
											<tr>
												<td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top;">
													<table class="list_block block-1" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word; color: #101112; direction: ltr; font-family: Arial, Helvetica, sans-serif; font-size: 16px; font-weight: 700; letter-spacing: 0px; line-height: 120%; text-align: left; mso-line-height-alt: 19.2px;">
														<tr>
															<td class="pad">
																<div style="margin-left:-20px">
																	<ul style="margin-top: 0; margin-bottom: 0; list-style-type: revert;">
																		<li style="Margin: 0 0 0 0;"><em>Integrated Stripe for seamless online payments</em></li>
																		<li style="Margin: 0 0 0 0;"><em>Set up for alcohol delivery within 20 minutes</em></li>
																	</ul>
																</div>
															</td>
														</tr>
													</table>
													<table class="image_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad" style="width:100%;">
																<div class="alignment" align="center" style="line-height:10px">
																	<div style="max-width: 600px;"><img src="https://d15k2d11r6t6rl.cloudfront.net/pub/bfra/odzf5l2d/46p/qsb/0he/1.png" style="display: block; height: auto; border: 0; width: 100%;" width="600" alt title height="auto"></div>
																</div>
															</td>
														</tr>
													</table>
													<table class="video_block block-3" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr style="box-sizing: content-box;">
															<td class="pad" style="box-sizing: content-box; width: 100%; padding-left: 0; padding-right: 0;" width="100%"><!--[if (mso)|(IE)]><table width="600" align="center" cellpadding="0" cellspacing="0" role="presentation"><tr><td><![endif]-->
																<div class="sizer" align="center" style="box-sizing: content-box; max-width: 600px; min-width: 320px;"><!--[if !vml]><!--><a class="video-preview" tabindex="0" href="https://www.youtube.com/watch?v=S6Ss7nfXTWM" target="_blank" title="justcheers" style="box-sizing: content-box; background-color: #5b5f66; background-image: radial-gradient(circle at center, #5b5f66, #1d1f21); display: block; text-decoration: none;">
																		<div style="box-sizing: content-box;">
																			<table cellpadding="0" cellspacing="0" border="0" width="100%" background="https://img.youtube.com/vi/S6Ss7nfXTWM/0.jpg" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; box-sizing: content-box; background-image: url(https://img.youtube.com/vi/S6Ss7nfXTWM/0.jpg); background-size: cover; background-position: center; min-height: 240px; min-width: 320px;">
																				<tr style="box-sizing: content-box;">
																					<td width="25%" style="box-sizing: content-box;"><img src="https://app-rsrc.getbee.io/public/resources/multiparser/video_block/video_ratio_4-3.gif" alt="ratio" width="100%" border="0" style="display: block; box-sizing: content-box; height: auto; opacity: 0; visibility: hidden;" height="auto"></td>
																					<td width="50%" align="center" valign="middle" style="box-sizing: content-box; vertical-align: middle;"><img src="https://app-rsrc.getbee.io/public/resources/components/widgetBar/video-content-icon-sets/dark/type-02.png" width="65" height="auto" style="display: block; height: auto; box-sizing: content-box;"></td>
																					<td width="25%" style="box-sizing: content-box;">&#160;</td>
																				</tr>
																			</table>
																		</div>
																	</a><!--<![endif]--><!--[if vml]>
<v:group xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" coordsize="600,450" coordorigin="0,0" href="https://www.youtube.com/watch?v=S6Ss7nfXTWM" style="width:600px;height:450px;">
<v:rect fill="t" stroked="f" style="position:absolute;width:600;height:450;">
<v:fill src="https://img.youtube.com/vi/S6Ss7nfXTWM/0.jpg" type="frame"/>
</v:rect>
<v:oval fill="t" strokecolor="#000000" strokeweight="3px" style="position:absolute;left:268;top:193;width:65;height:65">
<v:fill color="black" opacity="0%" />
</v:oval>
<v:shape coordsize="24,32" path="m,l,32,24,16,xe" fillcolor="#000000" stroked="f" style="position:absolute;left:291;top:209;width:23;height:33;" />
</v:group>
<![endif]--></div><!--[if (mso)|(IE)]></td></tr></table><![endif]-->
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
				</td>
			</tr>
		</tbody>
	</table><!-- End -->
</body>

</html>`,
    };

    // Send emails
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(userMailOptions);

    // Respond to the client
    res.status(201).json({ message: "Message sent successfully" });
  } catch (error) {
    console.log("Error in contact", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

export default Contactmessage;
