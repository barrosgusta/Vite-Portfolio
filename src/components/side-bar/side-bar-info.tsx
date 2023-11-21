import { IconWithActions } from "../icon-with-actions";
import { Github, Instagram, Linkedin, Mail, Phone } from "lucide-react";

export function SideBarInfo() {
    return (
        <div className="grid grid-flow-col lg:grid-flow-row place-items-center">
            <div className="flex gap-3 items-center">
                <IconWithActions
                    icon={<Github size={25} />}
                    
                    href="https://github.com/barrosgusta"
                />
                <IconWithActions
                    icon={<Linkedin size={25} />}
                    
                    href="https://www.linkedin.com/in/barrosgusta/"
                />
                <IconWithActions
                    icon={<Instagram size={25} />}
                    
                    href="https://www.instagram.com/barros.gusta/"
                />
                <IconWithActions icon={<Mail size={25} />} toCopy="guga082011@gmail.com" />
                <IconWithActions icon={<Phone size={25} />} toCopy="55049999910202" />
            </div>
        </div>
    );
}
