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
	const { leftTitle, rightTitle, leftParagraph, rightParagraph } = props.attributes;

	return (
		<div { ...useBlockProps.save() }>
			<div className="split-text-container">
				<div className="text-container">
					<RichText.Content
						{...blockProps}
						className="title"
						tagName="h2"
						value={leftTitle}
					/>
					<RichText.Content
						{...blockProps}
						className="paragraph"
						tagName="p"
						value={leftParagraph}
					/>
				</div>
				<div className="text-container">
					<RichText.Content
						{...blockProps}
						className="title"
						tagName="h2"
						value={rightTitle}
					/>
					<RichText.Content
						{...blockProps}
						className="paragraph"
						tagName="p"
						value={rightParagraph}
					/>
				</div>
			</div>
		</div>
	);
}
