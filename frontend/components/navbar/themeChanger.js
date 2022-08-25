import { useTheme } from 'next-themes';
import { Button, StyledButtonIcon } from '@nextui-org/react';
import { HeartIcon } from '../../icons/HeartIcon';
import { SunIcon } from '../../icons/SunIcon';
import { MoonIcon } from '../../icons/MoonIcon';
import { useState, useEffect } from 'react';

export const ThemeChanger = () => {
    const { theme, setTheme } = useTheme();
    // console.log({theme})
    const [mounted, setMounted] = useState(false)
    // console.log({mounted})

    // useEffect only runs on the client, so now we can safely show the UI
    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
      }

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