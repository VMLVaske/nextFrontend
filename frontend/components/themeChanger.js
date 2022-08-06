import { useTheme } from 'next-themes';
import { Button, StyledButtonIcon } from '@nextui-org/react';
import { HeartIcon } from '../icons/HeartIcon';

export const ThemeChanger = () => {
    const { theme, setTheme } = useTheme();

    const toggle = () => {
        if (theme == 'light') {
            setTheme('dark')
        }
        if (theme == 'dark') {
            setTheme('light')
        }
    }
    return (
        <div>
            <Button
                auto
                color="error"
                icon={<HeartIcon />}
                onClick={toggle}
                flat
            />
        </div>
    )
}