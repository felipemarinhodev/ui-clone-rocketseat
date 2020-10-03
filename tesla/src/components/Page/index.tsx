import React from 'react';

import { ModelsWrapper, ModelSection } from '../Models';
import DefaultOverlayContent from '../DefaultOverlayContent';

import { Container } from './styles';

const Page: React.FC = () => {
	return (
		<Container>
			<ModelsWrapper>
				<div>
					<ModelSection
						modelName="Model One"
						overlayNode={
							<DefaultOverlayContent
								label="Model One"
								description="Order Online for delivery"
							/>
						}
					/>
				</div>
			</ModelsWrapper>
		</Container>
	);
}

export default Page;