import { TextBoxContent } from "./TextBoxContent";
import { TextBoxDescription } from "./TextBoxDescription";
import { TextBoxIcon } from "./TextBoxIcon";
import { TextBoxRoot } from "./TextBoxRoot";
import { TextBoxTitle } from "./TextBoxTitle";

export const TextBox = { 
    Root: TextBoxRoot,
    Content : {
        Root: TextBoxContent,
        Title: TextBoxTitle,
        Description: TextBoxDescription,
    },
    Icon: TextBoxIcon,  
}