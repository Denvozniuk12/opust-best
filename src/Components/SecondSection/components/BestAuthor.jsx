import React from 'react';
import { useTranslation } from 'react-i18next';
import imageSecondSectionBestAuthorAuthorOfWeek from '../../../Img/SecondSection/BestAuthor/Author_of_Week.webp';

function BestAuthor() {
    const { t } = useTranslation();
    const facebookBtnSvg = (
        <svg viewBox="0 0 64 64" width="40" height="40">
            <rect width="64" height="64" rx="0" ry="0" fill="#3b5998"></rect>
            <path d="M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z" fill="white"></path>
        </svg>
    );
    return(
        <div className='best-author'>
            <h2 className='h2 best-author-h2'>{t('Best Author')}</h2>
            <div className='best-author-card'>
                <div className='best-author-img-div'>
                    <img className='best-author-img' src={imageSecondSectionBestAuthorAuthorOfWeek} alt="Author of Week" />
                </div>
                <h3 className='h3 best-author-h3'>Emma Cline</h3>
                <p className='text-base'>Emma Cline is the author of The Girls and the winner of the Plimpton Prize. Her story collection Daddy was published in 2020. The Girls was an international bestseller and was a finalist for a National Book Critic’s Circle Award, the First Novel Prize, and the Los Angeles Times Book Prize, and the winner of the Shirley Jackson Award. In 2017, Cline was named one of Granta’s Best Young American Novelists. Her short stories and essays have appeared in The New Yorker, The Paris Review, The New York Times, Granta and Tin House. Her stories have been chosen for the Best American Short Stories in 2017, 2018, and 2020, and were anthologized in The Unprofessionals: New American Writing from The Paris Review. In 2019, Cline’s story, “What Can You Do With A General,” was shortlisted for the Sunday Times Story Prize, and in 2021, she won an O. Henry Prize for “White Noise.”</p>
                <button className='facebook-btn'>{facebookBtnSvg}</button>
            </div>
        </div>
    );
}

export default BestAuthor;
