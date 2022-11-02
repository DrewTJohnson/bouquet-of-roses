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
	RichText,
	InspectorControls,
	MediaUpload, 
	MediaUploadCheck,
	InnerBlocks
} from '@wordpress/block-editor';
import {
	Panel,
	PanelBody,
	PanelRow,
	BaseControl,
	Button,
	ToggleControl,
	TextControl
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
	const { title, icon, linkUrl, linkTitle, linkTarget } = props.attributes;
	let target = linkTarget;

	return (
		<div { ...useBlockProps() }>
			<InspectorControls>
			<Panel>
				<PanelBody
					title={__('Card Icon', 'card-item')}
					initialOpen={true}
				>
					<PanelRow>
						<BaseControl>
							<MediaUploadCheck>
								<MediaUpload
									onSelect={(icon) => props.setAttributes({
									icon: {
										id: icon.id,
										url: icon.url,
										width: icon.width,
										height: icon.height,
										alt: icon.alt
									}
								})}
								value={icon.id}
								allowedTypes={['image']}
								render={({ open }) => (
									<div>
										{icon.id !== 0 &&
											<div>
												<img src={icon.url} width={icon.width} height={icon.height} alt={icon.alt} />
												<Button onClick={ open } isSecondary>
													{__('Replace Media', 'split-feature')}
												</Button>
											</div>
										}
										{icon.id === 0 && 
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
					</PanelRow>
				</PanelBody>
			</Panel>
			<Panel>
				<PanelBody
					title={__('Card Link', 'card-item')}
					initialOpen={true}
				>
					<TextControl
						label={__('URL', 'card-item')}
						value={ linkUrl }
						onChange={ ( url ) => props.setAttributes({ linkUrl: url })}
					/>
					<TextControl
						label={__('title', 'card-item')}
						value={ linkTitle }
						onChange={( text ) => props.setAttributes({ linkTitle: text })}
					/>
					<ToggleControl
						label={__("Open link in new tab", "split-feature")}
						help={target ? "Same Window" : "New Tab"}
						checked={target}
						onChange={() => props.setAttributes({ linkTarget: !target })}
					/>
				</PanelBody>
			</Panel>
			</InspectorControls>
			<div className='card-item'>
			<RichText
				{...useBlockProps()}
				className="title"
				tagName="h2"
				value={title}
				allowedFormats={ ['core/bold', 'core/italic' ] }
				onChange={(heading) => {props.setAttributes({ title: heading })}}
				placeholder={__("Title...")}
				keepPlaceholderOnFocus={true}
			/>
			<InnerBlocks 
				allowedBlocks={['core/image']}
			/>
			</div>
		</div>
	);
}
