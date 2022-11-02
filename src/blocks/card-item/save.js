/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { 
	useBlockProps,
	InnerBlocks,
	RichText
 } from '@wordpress/block-editor';

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
	const { title, icon, media, linkUrl, linkTarget, linkTitle } = props.attributes;
	let newTab = '';

	if ( linkTarget != 0) {
		newTab = '_blank'
	} else {
		newTab = '_self'
	}

	return (
		<div { ...useBlockProps }>
			<div className="card">
				<a href={linkUrl} target={newTab} title={linkTitle} rel="noopener">
				<div className="card-intro">
					<RichText.Content
						{...blockProps}
						className="title"
						tagName="h2"
						value={title}
					/>
					<div className="icon">
						<img src={icon.url} alt={icon.alt} height={icon.height} width={icon.width} />
					</div>
				</div>
				<div className="card-body">
					<InnerBlocks.Content />
				</div>
				</a>
			</div>
		</div>
	);
}
