import React from 'react';
import Search from '../Search';
import { useTranslation } from 'react-i18next';

function BlogPageHeader() {
    const { t } = useTranslation();
    return (
            <div className='staticHeight'>
                <div className='wrap'>
                    <div className='blog-page-header'>
                        <h2 className='w-50 blog-page-h2'>{t('Articles')}</h2>
                        <div className='w-50 md-w-full'>
                            <Search />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
export default BlogPageHeader;
