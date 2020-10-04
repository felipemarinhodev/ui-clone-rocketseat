import React from 'react';

import { ModelsWrapper, ModelSection } from '../Models';
import DefaultOverlayContent from '../DefaultOverlayContent';

import { Container, Spacer } from './styles';
import UniqueOverlay from '../UniqueOverlay';

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

				<Spacer />

				<UniqueOverlay />
			</ModelsWrapper>
		</Container>
	);
}

export default Page;