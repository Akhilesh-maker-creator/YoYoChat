import React from 'react';
import { useParams, useNavigate } from 'react-router';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import useAuth from '../hooks/userHooks/useAuth'; 

const VideoCallPage = () => {
  const { roomId } = useParams();
  const navigate = useNavigate();
  const { authUser } = useAuth(); 

  const myMeeting = async (element) => {
    const appID = 994291523; 
    const serverSecret = "99dcd7ef4d0a71eadb76b5ded9ce867d"; 
    
    const token = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID, 
      serverSecret, 
      roomId, 
      authUser?._id || Date.now().toString(), 
      authUser?.fullName || "Guest" 
    );

    
    const zp = ZegoUIKitPrebuilt.create(token);

    zp.joinRoom({
      container: element,
      sharedLinks: [
        {
          name: 'Copy Link',
          url: window.location.protocol + '//' + window.location.host + window.location.pathname,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.OneONOneCall,
      },
      onLeaveRoom: () => navigate('/') 
    });
  };

  return (
    <div
      className="w-full h-screen"
      ref={myMeeting}
    ></div>
  );
};

export default VideoCallPage;