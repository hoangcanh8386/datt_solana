import React, { useState, useEffect } from "react";
import axios from "axios";
import { apiKey } from "../api";

const UserDashboard = ({ userData }) => {
  const [nfts, setNfts] = useState([]);

  useEffect(() => {
    const fetchNfts = async () => {
      try {
        const response = await axios.get(
          `https://api.gameshift.dev/nx/${userData.referenceId}`,
          {
            headers: {
              "x-api-key": apiKey,
            },
          }
        );
        setNfts(response.data);
      } catch (err) {
        console.error("Lỗi tải NFT", err);
      }
    };

    if (userData?.referenceId) {
      fetchNfts();
    }
  }, [userData]);

  return (
    <div className="container mt-5">
      {/* Thông tin người dùng */}
      <div className="card mb-4 shadow-sm">
        <div className="card-header bg-primary text-white">
          <h3 className="mb-0">Thông tin người dùng</h3>
        </div>
        <div className="card-body">
          <p>
            {/* <strong>Email:</strong> {userData.email} */}
          </p>
          <p>
            <strong>Reference ID:</strong> {userData.referenceId}
          </p>
        </div>
      </div>

      {/* NFT */}
      <div className="card shadow-sm">
        <div className="card-header bg-secondary text-white">
          <h4 className="mb-0">Các BookNFT của bạn</h4>
        </div>
        {/* <div className="card-body">
          {nfts.length > 0 ? (
            <div className="row">
              {nfts.map((nft) => (
                <div key={nft.id} className="col-md-4 mb-4">
                  <div className="card h-100">
                    <div className="card-body">
                      <h5 className="card-title">{nft.name}</h5>
                      <p className="card-text">
                        <strong>Giá:</strong> {nft.price} SOL
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-muted">Chưa có NFT nào.</p>
          )}
        </div> */}
      </div>
    </div>
  );
};

export default UserDashboard;
