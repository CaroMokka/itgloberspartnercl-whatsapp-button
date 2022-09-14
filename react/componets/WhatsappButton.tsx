import React from "react";
import PropTypes from "prop-types"

type Props = {
    logo: string
    phone: string
    message: string
    width: number
    height: number
}

const WhatsappButton = ({logo, phone, message, width, height}: Props) => {
    const formattedMessage = message.replace(/ /g, "%20")
    console.log("mi mensaje formateado es", formattedMessage, logo)
    return <>
    <div className="fixed bottom-2 right-2 flex flexColumn">
        <a 
        href={`https://wa.me/${phone}?text=${formattedMessage}`}
        target="_blank"
        rel="noreferrer noopener" >
            <img 
            src={logo} 
            width={width} 
            height={height} 
            alt="whatsapp-logo" />
        </a>
    </div>
    </>
}

WhatsappButton.propTypes = {
    logo: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    message: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number
}
WhatsappButton.defaultProps = {
    logo: "mi-logo.png",
    phone: "30459267",
    message: "Estas comunicandote con VTEX U",
    width: 80,
    height: 80
}
WhatsappButton.schema = {
    title: "Whatsapp button",
    type: "object",
    properties: {
        logo: {
            title: "Whatsapp logo that is related to the brand",
            type: "string",
            widget: {
                "ui:widget": "image-uploader"
            }
        },
        phone: {
            title: "Phone",
            description: "Add the phone number",
            type: "string"
        },
        message: {
            title: "Message",
            description: "Add the message",
            type: "string",
            widget: {
                "ui:widget": "textarea"
            }
        },
        width: {
            title: "Width",
            description: "width",
            type: "number"
        },
        height: {
            title: "height",
            description: "height",
            type: "number"
        }
    }
}

export default WhatsappButton;