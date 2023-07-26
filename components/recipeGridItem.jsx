import Image from 'next/image';
import Link from 'next/link';
import { IMAGE_URL } from '../lib/constants';
import { GradientPlaceholder } from './grid';
import styles from './grid.module.css';

// For use with withGrid
export const RecipeGridItem = ({ content: recipe, multiLanguage, locale }) => {
	const imgSrc = recipe?.field_media_image?.field_media_image?.uri?.url || null;
	return (
		<Link
			passHref
			href={`${multiLanguage ? `/${recipe.path.langcode || locale}` : ''}${
				recipe.path.alias
			}`}
		>
			<div
				className={`${styles.card} rounded-lg cursor-pointer h-full overflow-x-hidden`}
			>
				<div className="shrink-0 h-40 relative">
					{imgSrc !== null ? (
						<Image
							src={IMAGE_URL + imgSrc}
							fill
							style={{ objectFit: 'cover' }}
							alt={recipe.title}
						/>
					) : (
						<GradientPlaceholder />
					)}
				</div>
				<h2 className={`${styles.cardTitle} font-semibold py-4 px-6`}>
					{recipe.title} &rarr;
				</h2>
				{recipe?.field_recipe_category?.length > 0 ? (
					<span className={`${styles.recipeCategory} text-right`}>
						{recipe?.field_recipe_category[0].name}
					</span>
				) : null}
			</div>
		</Link>
	);
};
