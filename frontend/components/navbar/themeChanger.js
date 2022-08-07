import { useTheme } from 'next-themes';
import { Button, StyledButtonIcon } from '@nextui-org/react';
import { HeartIcon } from '../../icons/HeartIcon';
import { SunIcon } from '../../icons/SunIcon';
import { MoonIcon } from '../../icons/MoonIcon';
import { useState } from 'react';

export const ThemeChanger = () => {
    const { theme, setTheme } = useTheme();
    // false == darkTheme
    //const [isLight, setIsLight ] = useState(true);

    const toggle = () => {
        if (theme == 'light') {
            setTheme('dark')
            //setIsLight(false)
        }
        if (theme == 'dark') {
            setTheme('light')
            //setIsLight(true)
        }
    }
    return (
        <div>
            <Button
                auto
                color="error"
                icon={<HeartIcon/>}
                onPress={toggle}
            />
        </div>
    )
}