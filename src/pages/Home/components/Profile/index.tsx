import { FaBuilding, FaUserFriends } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";
import { IProfile } from "../../../../contexts/githubContext";
import { InfoContainer, InfoContent, LodingContainer, ProfileContainer, ProfileContent } from "./styles";
import { AiOutlineLoading } from "react-icons/ai";
import { memo } from "react";

interface IProfileProps{
    profile: IProfile
    isLoading: boolean
}

 function ProfileComponent({ profile, isLoading }: IProfileProps) {

    if (isLoading) {
        return (
            <LodingContainer>
                <AiOutlineLoading size={24}/> 
                Buscando perfil
            </LodingContainer>
        )
    }

    return(
        <ProfileContainer>
            <a href="#">GITHUB <FaArrowUpRightFromSquare /></a>
            <img src={profile.avatar} alt="jhuly profile photo" />
            <ProfileContent>
                <h2>{profile.name}</h2>
                <p>{profile.description}</p>
                <InfoContainer>
                    <InfoContent>
                        <IoLogoGithub size={18} />
                        {profile.username}
                    </InfoContent>
                    <InfoContent>
                        <FaBuilding />
                        {profile.company}
                    </InfoContent>
                    <InfoContent>
                        <FaUserFriends size={18} />
                        {profile.followers} seguidores
                    </InfoContent>
                </InfoContainer>
            </ProfileContent>
        </ProfileContainer>
    )
}

export const Profile = memo(ProfileComponent)