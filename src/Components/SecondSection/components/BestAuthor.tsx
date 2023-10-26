import { useTranslation } from 'react-i18next';
import { imageSecondSectionBestAuthorAuthorOfWeek } from '../../../Img/SecondSection/BestAuthor';
import { facebookBtnSvg } from '../../../Img/SecondSection/BestAuthor';

function BestAuthor() {
    const { t } = useTranslation();
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
