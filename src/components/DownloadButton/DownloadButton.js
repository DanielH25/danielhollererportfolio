
export default function DownloadButton ({CV}) {
    return (
        <a href={CV} download="CV-DanielHollerer" rel='noopener noreferrer' target='_blank'>
            <button id="downloadButton">Download CV</button>
        </a>
    )
}
