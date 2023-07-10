import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconFrame } from '../IconFrame/IconFrame';
import {
    faMailBulk,
    faMapLocation,
    faMobile,
} from '@fortawesome/free-solid-svg-icons';
import {
    faInstagram,
    faLinkedin,
    faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { PillSeparator } from '../PillSeparator';

export function SideBarInfo() {
    return (
        <div className="grid place-items-center">
            <div className="flex flex-col justify-center items-start">
                <div className="grid grid-flow-col place-items-center">
                    <IconFrame icon={<FontAwesomeIcon icon={faMailBulk} />} />
                    <span className="text-zinc-600 dark:text-zinc-300 dark:text-zinc-300 text-xs text-left justify-center">
                        E-Mail: guga082011@gmail.com
                    </span>
                </div>

                <div className="grid grid-flow-col place-items-center">
                    <IconFrame
                        icon={<FontAwesomeIcon icon={faMapLocation} />}
                    />
                    <span className="text-zinc-600 dark:text-zinc-300 text-xs text-left justify-center">
                        Rio do Sul - SC
                    </span>
                </div>

                <div className="grid grid-flow-col place-items-center">
                    <IconFrame icon={<FontAwesomeIcon icon={faMobile} />} />
                    <span className="text-zinc-600 dark:text-zinc-300 text-xs text-left justify-center">
                        +55 (49) 9 999910202
                    </span>
                </div>
            </div>

            {/* <div className="border border-zinc-500 w-24 h-0 my-2 flex flex-col items-center justify-center"></div> */}

            <PillSeparator />
            <div className="flex flex-row items-center">
                <IconFrame
                    icon={<FontAwesomeIcon icon={faLinkedin} />}
                    isSmall
                    href="https://www.linkedin.com/in/gustavo-barros-91b805253/"
                />
                <IconFrame
                    icon={<FontAwesomeIcon icon={faInstagram} />}
                    isSmall
                    href="https://www.instagram.com/barros.gusta/"
                />
                <IconFrame
                    icon={<FontAwesomeIcon icon={faTwitter} />}
                    isSmall
                    href="https://twitter.com/barros_gusta/"
                />
            </div>
        </div>
    );
}
