import { useTranslation } from 'react-i18next';

function BlogHead() {
    const { t } = useTranslation();
    return (
        <div className='blog-head'>
            <h2 className='h2 blog-head-h2'>{t('Blog')}</h2>
            <div className='blog-head-btn-div'>
                <button className='blog-head-btn'>{t('All News')}</button>
            </div>
        </div>
    );
}

export default BlogHead;
