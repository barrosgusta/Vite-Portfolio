import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconFrame } from '../IconFrame/IconFrame';
import {
    faInstagram,
    faLinkedin,
    // faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { PillSeparator } from '../PillSeparator';
import { Mail, PhoneIcon } from 'lucide-react';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';

export function SideBarInfo() {
    return (
        <div className="grid grid-flow-col lg:grid-flow-row place-items-center">
            <div className="flex flex-col justify-center items-start">

                <div className="grid grid-flow-col place-items-center">
                    
                    <IconFrame icon={<Mail />} toCopy='guga082011@gmail.com' />
                    <span className="text-zinc-700 dark:text-zinc-300 text-xs font-sans text-left justify-center">
                        guga082011@gmail.com
                    </span>

                </div>
{/* 
                <div className="grid grid-flow-col place-items-center">

                    <IconFrame icon={<MapPin />} />
                    <span className="text-zinc-700 dark:text-zinc-300 text-xs text-left justify-center">
                        Rio do Sul - SC || Chapadão do Lageado - SC
                    </span>

                </div> */}

                <div className="grid grid-flow-col place-items-center">

                    <IconFrame icon={<PhoneIcon />} toCopy='55049999910202' />
                    <span className="text-zinc-700 dark:text-zinc-300 text-xs font-sans text-left justify-center">
                        +55 (49) 9 9991-0202
                    </span>

                </div>
                
            </div>

            <PillSeparator className='rotate-90 lg:rotate-0 w-24 lg:m-5 lg:mb-7' />

            <div className="flex flex-col lg:flex-row items-center">
                <IconFrame
                    icon={<FontAwesomeIcon icon={faGithub} />}
                    isSmall
                    href="https://github.com/barrosgusta"
                />
                <IconFrame
                    icon={<FontAwesomeIcon icon={faLinkedin} />}
                    isSmall
                    href="https://www.linkedin.com/in/barrosgusta/"
                />
                <IconFrame
                    icon={<FontAwesomeIcon icon={faInstagram} />}
                    isSmall
                    href="https://www.instagram.com/barros.gusta/"
                />
                {/* <IconFrame
                    icon={<FontAwesomeIcon icon={faTwitter} />}
                    isSmall
                    href="https://twitter.com/barros_gusta/"
                /> */}
            </div>
        </div>
    );
}
