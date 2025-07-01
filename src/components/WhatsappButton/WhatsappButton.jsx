// components/WhatsappButton.jsx
const WhatsappButton = () => {
    const phoneNumber = "556181189573";

    return (
        <a
            href={`https://wa.me/${phoneNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50"
        >
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/5e/WhatsApp_icon.png"
                alt="Fale conosco no WhatsApp"
                className="w-14 h-14 drop-shadow-lg hover:scale-105 transition-transform"
            />
        </a>
    );
};

export default WhatsappButton;
