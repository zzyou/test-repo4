import Link from 'next/link';
import Image from 'next/image';
import { IMAGE_URL } from '../lib/constants';
import { withGrid } from '@pantheon-systems/nextjs-kit';
import styles from './grid.module.css';

export const GradientPlaceholder = () => (
	<div className={styles.gradientPlaceholder} />
);

// For use with withGrid
export const ArticleGridItem = ({
	content: article,
	multiLanguage,
	locale,
}) => {
	const imgSrc = article?.field_media_image?.field_media_image?.uri?.url || '';
	return (
		<Link
			passHref
			href={`${multiLanguage ? `/${article.path.langcode || locale}` : ''}${
				article.path.alias
			}`}
		>
			<div
				className={`${styles.card} rounded-lg cursor-pointer h-full overflow-x-hidden`}
			>
				<div className="shrink-0 h-40 relative">
					{imgSrc !== '' ? (
						<Image
							src={IMAGE_URL + imgSrc}
							fill
							style={{ objectFit: 'cover' }}
							alt={article.title}
						/>
					) : (
						<GradientPlaceholder />
					)}
				</div>
				<h2 className={`${styles.cardTitle} font-semibold py-4 px-6`}>
					{article.title} &rarr;
				</h2>
			</div>
		</Link>
	);
};

export const ArticleGrid = withGrid(ArticleGridItem);
