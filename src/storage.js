import { Web3Storage } from "web3.storage";

const metadataJson = {
    name: "First Proposal",
    description: "Build for wellness",
    ipfs: "bafybeihjjkwdrxxjnuwevlqtqmh3iegcadc32sio4wmo7bv2gbf34qs34a"
}

const metadataBlob = new Blob([JSON.stringify(metadataJson)])

async function uploadToIpfs(metadataBlob, fileName) {
    // setLoading(true)
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDcxNTc5YzYyODZGNzEzYzBjQTUxMUEyODI0RUUyN0NBRjE4OTE0OTMiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NzA0Mjk5OTQzMTUsIm5hbWUiOiJGaXJzdCJ9.aR4QbNCUv4gqAZ8D95Ebu7BVbNmIjtY_HDWWUqhEF0Y"
    const web3Client = new Web3Storage({ token: token })

    console.log("Getting Encrypted FIle and key...")
    // const { zipBlob, encryptedSymmetricKey, accessControlConditions } =
    // await encrypt()
    console.log("Done getting Encrypted FIle and key")

    console.log("Putting files on ipfs.....")
    const cid = await web3Client.put([new File([metadataBlob], fileName)])

    console.log("Uploaded to IPFS successfully. CID is :- ")
    console.log(cid)
    // setLoading(false)
    return cid
}

const storage = (metadata,fileName) => {
    // getFiles()
    const cid = uploadToIpfs(metadata, fileName)
    return cid
}

export default storage