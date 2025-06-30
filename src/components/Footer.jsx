import React from 'react';
import { useTranslation } from 'react-i18next';

function Footer(props) {

    // I18n's useTranslation hook
    const { t } = useTranslation();

    return (
        
        <div class="bg-white dark:bg-slate-900 rounded-lg mx-auto p-4 flex items-center justify-center">
            <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 {" "} 
                <a href="#home" class="hover:underline">
                    EduardoDev
                </a>. {t('footer.text')}

            </span>
        </div>
    );
}

export default Footer;