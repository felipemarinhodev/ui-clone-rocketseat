import React from 'react';

import { ModelsWrapper, ModelSection } from '../Models';
import DefaultOverlayContent from '../DefaultOverlayContent';

import { Container } from './styles';

const Page: React.FC = () => {
	return (
		<Container>
			<ModelsWrapper>
				<div>
					{[
						'Model One',
						'Model Two',
						'Model Three',
						'Model Four',
						'Model Five',
						'Model Six',
						'Model Seven',
					].map(modelName => (
						<ModelSection
							className="colored"
							modelName={modelName}
							key={modelName}
							overlayNode={
								<DefaultOverlayContent
									label={modelName}
									description="Order Online for delivery"
								/>
							}
						/>
					))}
				</div>
			</ModelsWrapper>
		</Container>
	);
}

export default Page;