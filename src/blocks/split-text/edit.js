/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { 
	useBlockProps,
	RichText
 } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit(props) {
	const blockProps = useBlockProps();
	const { leftTitle, rightTitle, leftParagraph, rightParagraph } = props.attributes;

	return (
		<div { ...blockProps }>
			<div className="split-text-container">
				<div class="text-container">
					<RichText
						{...blockProps}
						className="title"
						tagName="h2"
						value={leftTitle}
						allowedFormats={ ['core/bold', 'core/italic' ] }
						onChange={(heading) => {props.setAttributes({ leftTitle: heading })}}
						placeholder={__("Title...")}
						keepPlaceholderOnFocus={true}
					/>
					<RichText
						{...blockProps}
						className="paragraph"
						tagName="p"
						value={leftParagraph}
						allowedFormats={ ['core/bold', 'core/italic' ] }
						onChange={(text) => {props.setAttributes({ leftParagraph: text })}}
						placeholder={__("Lorem Ipsum...")}
						keepPlaceholderOnFocus={true}
					/>
				</div>
				<div className="text-container">
					<RichText
						{...blockProps}
						className="title"
						tagName="h2"
						value={rightTitle}
						allowedFormats={ ['core/bold', 'core/italic' ] }
						onChange={(heading) => {props.setAttributes({ rightTitle: heading })}}
						placeholder={__("Title...")}
						keepPlaceholderOnFocus={true}
					/>
					<RichText
						{...blockProps}
						className="paragraph"
						tagName="p"
						value={rightParagraph}
						allowedFormats={ ['core/bold', 'core/italic' ] }
						onChange={(text) => {props.setAttributes({ rightParagraph: text })}}
						placeholder={__("Lorem Ipsum...")}
						keepPlaceholderOnFocus={true}
					/>
				</div>
			</div>
		</div>
	);
}
