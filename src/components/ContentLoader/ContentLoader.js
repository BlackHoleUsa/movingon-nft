import ContentLoader, { Facebook } from 'react-content-loader';

export const MyLoader = () => <ContentLoader />
export const MyFacebookLoader = () => <Facebook />

export const ImageLoader = () => {
    return <ContentLoader
                height={140}
                speed={1}
                backgroundColor={'#A9A9A9'}
                foregroundColor={'#D3D3D3'}
                viewBox="0 0 43 112"
            >    
            <rect x="0" y="0" rx="50" ry="50" width="43" height="43" />
        </ContentLoader>
}