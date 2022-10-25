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
	InspectorControls,
	MediaUpload, 
	MediaUploadCheck, 
	useBlockProps,
	RichText
} from '@wordpress/block-editor';
import {
	Panel,
	PanelBody,
	BaseControl,
	Button,
	ToggleControl
} from '@wordpress/components';

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
	const { media, title, paragraph, mediaAlignment } = props.attributes;
	let alignment = 'left';

	if( mediaAlignment ) {
		alignment = 'right';
	} else {
		alignment = 'left';
	}

	return (
		<div {...blockProps}>
			<InspectorControls>
				<Panel>
					<PanelBody
						title={__('Split Feature Image', 'split-feature')}
						initialOpen={true}
					>
						<BaseControl>
							<MediaUploadCheck>
								<MediaUpload
									onSelect={(media) => props.setAttributes({
										media: {
											id: media.id,
											url: media.url,
											width: media.width,
											height: media.height,
											alt: media.alt
										}
									})}
									value={media.id}
									allowedTypes={['image']}
									render={({ open }) => (
										<div>
											{media.id !== 0 &&
												<div>
													<img src={media.url} width={media.width} height={media.height} alt={media.alt} />
													<Button onClick={ open } isSecondary>
														{__('Replace Media', 'split-feature')}
													</Button>
												</div>
											}
											{media.id === 0 && 
												<div>
													<Button onClick={ open }>
														{__('Choose an image', 'split-feature')}
													</Button>
												</div>
											}
										</div>
									)}
								/>
							</MediaUploadCheck>
						</BaseControl>
						<ToggleControl
							label={__("Right align media", "split-feature")}
							help={mediaAlignment ? "Right" : "Left"}
							checked={mediaAlignment}
							onChange={() => props.setAttributes({ mediaAlignment: !mediaAlignment })}
						/>
					</PanelBody>
				</Panel>
			</InspectorControls>
			<div className={"split-feature-container " + alignment}>
				<div className="inner-container">
					<div className="media-container">
						<img className="media" src={media.url} width={media.width} height={media.height} alt={media.alt} />	
					</div>
					<div className="text-container">
						<RichText
							{...blockProps}
							className="title"
							tagName="h2"
							value={title}
							allowedFormats={ ['core/bold', 'core/italic' ] }
							onChange={(heading) => {props.setAttributes({ title: heading })}}
							placeholder={__("Title...")}
							keepPlaceholderOnFocus={true}
						/>
						<RichText
							{...blockProps}
							className="paragraph"
							tagName="p"
							value={paragraph}
							allowedFormats={ ['core/bold', 'core/italic' ] }
							onChange={(text) => {props.setAttributes({ paragraph: text })}}
							placeholder={__("Lorem Ipsum...")}
							keepPlaceholderOnFocus={true}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
