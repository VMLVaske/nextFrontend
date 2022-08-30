import { useTheme } from 'next-themes';
import { Button } from '@nextui-org/react';
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
            {theme == 'light' ? (
                <Button
                    auto
                    bordered
                    icon={<MoonIcon />}
                    onPress={toggle}
                />
            ) : (
                <Button
                    auto
                    bordered
                    icon={<SunIcon />}
                    onPress={toggle}
                />
            )
            }
        </div>
    )
}