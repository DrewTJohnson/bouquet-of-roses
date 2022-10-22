/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, RichText } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save(props) {
	const blockProps = useBlockProps.save();
	const { media, title, paragraph, mediaAlignment } = props.attributes;
	let alignment = 'left';

	if( mediaAlignment ) {
		alignment = 'right';
	} else {
		alignment = 'left';
	}

	return (
		<div className={"split-feature-container " + alignment}>
			{alignment === 'left' ? (
			<div className="inner-container">
				<div className="media-container">
					<img className="media" src={media.url} width={media.width} height={media.height} alt={media.alt} />
				</div>
				<div className="text-container">
					<RichText.Content
						{...blockProps}
						className="title"
						tagName="h2"
						value={title}
					/>
					<RichText.Content
						{...blockProps}
						className="paragraph"
						tagName="p"
						value={paragraph}
					/>
				</div>
			</div>
			) : (
			<div className="inner-container">
				<div className="text-container">
					<RichText.Content
						{...blockProps}
						className="title"
						tagName="h2"
						value={title}
					/>
					<RichText.Content
						{...blockProps}
						className="paragraph"
						tagName="p"
						value={paragraph}
					/>
				</div>
				<div className="media-container">
					<img className="media" src={media.url} width={media.width} height={media.height} alt={media.alt} />
				</div>
			</div>
			)}
		</div>
	);
}
