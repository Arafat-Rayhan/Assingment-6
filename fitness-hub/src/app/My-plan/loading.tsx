import Image from 'next/image'

const Loading = () => {
    return (
        <div>
            liding..............
             <Image 
                        src="/loading.png"
                        width={100}
                        height={100}
                        alt='loding'></Image>
        </div>
    );
};

export default Loading;