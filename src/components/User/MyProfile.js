import React from "react";
import styled from "styled-components";

function MyProfile() {
  return (
    <MyProfileCSS>
      <div>
        <h1 className="text-primary text-center"> Profile Settings</h1>
        <hr />
        <div className="container bootstrap snippets bootdey">
          <div className="row">
            {/* left column */}
            <div className="col-md-3">
              <div className="text-center">
                <img
                  src="https://bootdey.com/img/Content/avatar/avatar7.png"
                  className="avatar img-circle img-thumbnail"
                  alt="avatar"
                />
                <h6>Upload a different photo...</h6>
                <input type="file" className="form-control" />
              </div>
            </div>
            {/* edit form column */}
            <div className="col"></div>
            <div className="col-md-8 personal-info">
              {/* <div className="alert alert-info alert-dismissable">
                              <a className="panel-close close" data-dismiss="alert">×</a>
                              <i className="fa fa-coffee" />
                              This is an <strong>.alert</strong>. Use this to show important messages to the user.
                          </div> */}
              {/* <h3>Personal info</h3> */}
              <form className="form-horizontal" role="form">
                <div className="nameLabel">
                  <div className="form-group fn">
                    <label className="col-lg-3 control-label">
                      First name:
                    </label>
                    <div className="col-lg-8">
                      <input
                        className="form-control"
                        type="text"
                        defaultValue="dey-dey"
                      />
                    </div>
                  </div>
                  <div className="form-group ln">
                    <label className="col-lg-3 control-label">Last name:</label>
                    <div className="col-lg-8">
                      <input
                        className="form-control"
                        type="text"
                        defaultValue="bootdey"
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-lg-3 control-label">Phone:</label>
                  <div className="col-lg-8">
                    <input
                      className="form-control"
                      type="text"
                      defaultValue="0123"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-lg-3 control-label">Address:</label>
                  <div className="col-lg-8">
                    <input
                      className="form-control"
                      type="text"
                      defaultValue="janesemail@gmail.com"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-lg-3 control-label">
                    New Password:
                  </label>
                  <div className="col-lg-8">
                    <input
                      className="form-control"
                      type="password"
                      defaultValue="new pass"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-lg-3 control-label">
                    Confirm new Password:
                  </label>
                  <div className="col-lg-8">
                    <input
                      className="form-control"
                      type="password"
                      defaultValue="cf new pass"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-lg-3 control-label">Time Zone:</label>
                  <div className="col-lg-8">
                    <div className="ui-select">
                      <select id="user_time_zone" className="form-control">
                        <option value="Hawaii">(GMT-10:00) Hawaii</option>
                        <option value="Alaska">(GMT-09:00) Alaska</option>
                        <option value="Pacific Time (US & Canada)">
                          (GMT-08:00) Pacific Time (US &amp; Canada)
                        </option>
                        <option value="Arizona">(GMT-07:00) Arizona</option>
                        <option value="Mountain Time (US & Canada)">
                          (GMT-07:00) Mountain Time (US &amp; Canada)
                        </option>
                        <option
                          value="Central Time (US & Canada)"
                          selected="selected"
                        >
                          (GMT-06:00) Central Time (US &amp; Canada)
                        </option>
                        <option value="Eastern Time (US & Canada)">
                          (GMT-05:00) Eastern Time (US &amp; Canada)
                        </option>
                        <option value="Indiana (East)">
                          (GMT-05:00) Indiana (East)
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
                <br />
                <button type="button" className="btn btn-success btn-block">
                  Save Profile
                </button>
              </form>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </MyProfileCSS>
  );
}

export default MyProfile;

const MyProfileCSS = styled.div`
  margin-left: 240px;
  body {
    margin-top: 20px;
  }

  .nameLabel {
    display: flex;
  }

  .nameLabel .fn {
    width: 40%;
  }
  .nameLabel .ln {
    width: 40%;
  }

  body {
    margin-top: 20px;
  }
  .avatar {
    width: 200px;
    height: 200px;
  }
`;
