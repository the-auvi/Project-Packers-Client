import { Editor } from '@tinymce/tinymce-react';
import React from 'react';

const ProductDescription = () => {
	return (
		<div className='w-full p-3 rounded-lg border'>
			{/* product name */}
			<div className='mb-2'>
				<label
					htmlFor='productName'
					className='text-sm font-normal text-slate-600'
				>
					Product Name
				</label>
				<input
					type='text'
					className='w-full py-2 px-3 border rounded outline-none'
					id='productName'
				/>
			</div>

			{/* description */}
			<div>
				<label
					htmlFor='productDescription'
					className='text-sm font-normal text-slate-600'
				>
					Description
				</label>
				{/* <textarea
					name='productDescription'
					id='productDescription'
					cols='30'
					rows='10'
					className='w-full border rounded outline-none'
				></textarea> */}

				<Editor
					apiKey='your-api-key'
					onInit={(evt, editor) => (editorRef.current = editor)}
					initialValue='<p>This is the initial content of the editor.</p>'
					inline
					init={{
						height: 500,
						menubar: true,
						plugins: [
							'advlist',
							'autolink',
							'lists',
							'link',
							'image',
							'charmap',
							'preview',
							'anchor',
							'searchreplace',
							'visualblocks',
							'code',
							'fullscreen',
							'insertdatetime',
							'media',
							'table',
							'code',
							'help',
							'wordcount',
						],
						toolbar:
							'  blocks | ' + 'bold italic    ' + '  bullist numlist  | ',

						content_style:
							'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
					}}
				/>
			</div>
		</div>
	);
};

export default ProductDescription;
