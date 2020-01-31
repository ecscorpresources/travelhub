import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import "./Pagination.css";

const Pagination = () => {
  return (
    <>
      <div id="paginationFirstSection">
        <div className="row">
          <div className="col-md-12">
            <p>4928 properties found in your recent search</p>
            <div>
              <p>Not what you are looking for?</p>
              <Link to="monkhey">Try your search again</Link>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <ul>
              <li>
                <IoIosArrowBack />
              </li>
              <li>
                <Link>1</Link>
              </li>
              <li>
                <Link>2</Link>
              </li>
              <li>
                <Link>3</Link>
              </li>
              <li>
                <Link>4</Link>
              </li>
              <li>
                <Link>5</Link>
              </li>
              <li>
                <Link>6</Link>
              </li>
              <li>
                <Link>7</Link>
              </li>
              <li>
                <Link>8</Link>
              </li>
              <li>
                <Link>9</Link>
              </li>
              <li>
                <Link>10 ....</Link>
              </li>

              <li>
                <Link>1232</Link>
              </li>
              <li>
                <IoIosArrowForward />
              </li>
            </ul>
            <ul>
              <li>Showing</li>
              <li>1 - 4 </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pagination;
